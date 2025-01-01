// Define endpoints for each model
const modelEndpoints = {
    fluxPro: 'https://api.paxsenix.biz.id/ai-image/fluxSchnell2',
    sdxl: 'https://api.paxsenix.biz.id/ai-image/sdxlImage',
    dalle: 'https://api.paxsenix.biz.id/ai-image/dalle',
    flux: 'https://api.paxsenix.biz.id/ai-image/fluxImage'
};

let selectedModel = 'fluxPro'; // Default model

// Update model when user selects a new model from the dropdown
document.getElementById('modelSelect').addEventListener('change', (event) => {
    selectedModel = event.target.value;
    console.log(`Selected Model: ${selectedModel}`);
});

async function generateImage() {
    const prompt = document.getElementById('prompt').value;

    if (!prompt) {
        showNotification('Please enter a prompt first!');
        return;
    }

    // Reset UI before generating the image
    const generateBtn = document.getElementById('generateBtn');
    const progress = document.getElementById('progress');
    const generatedImage = document.getElementById('generatedImage');
    const downloadBtn = document.getElementById('downloadBtn');

    generateBtn.disabled = true;
    progress.style.display = 'block';
    generatedImage.style.display = 'none';
    downloadBtn.style.display = 'none';
    generateBtn.querySelector('span').textContent = 'Generating...';

    try {
        // Construct the API request URL dynamically based on the selected model and prompt
        const url = `${modelEndpoints[selectedModel]}?text=${encodeURIComponent(prompt)}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);  // Log the API response to the console

        if (data.ok && data.task_url) {
            // Polling for result
            const checkResult = async () => {
                try {
                    const resultResponse = await fetch(data.task_url);
                    const resultData = await resultResponse.json();

                    console.log(resultData);  // Log the task result to the console

                    if (resultData.status === 'done' && resultData.url) {
                        // When status is "done", show the generated image
                        const currentImageUrl = resultData.url;
                        generatedImage.src = currentImageUrl;
                        generatedImage.style.display = 'block';
                        downloadBtn.style.display = 'flex';
                        showNotification('Image generated successfully!');
                    } else if (resultData.status === 'pending') {
                        // Retry in 2 seconds if the task is still pending
                        setTimeout(checkResult, 2000);
                        return;
                    } else {
                        // Handle unexpected status or failure
                        throw new Error(`Unexpected status: ${resultData.status}`);
                    }
                } catch (error) {
                    showNotification(`Error fetching the result: ${error.message}`);
                }

                // Reset UI after polling is finished
                progress.style.display = 'none';
                generateBtn.disabled = false;
                generateBtn.querySelector('span').textContent = 'Generate';
            };

            // Start polling the task URL
            checkResult();
        } else {
            throw new Error('Error with task URL or API response');
        }
    } catch (error) {
        showNotification(`Error generating image: ${error.message}`);
        progress.style.display = 'none';
        generateBtn.disabled = false;
        generateBtn.querySelector('span').textContent = 'Generate';
    }
}

function showNotification(message, duration = 3000) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, duration);
}

function downloadImage() {
    const imageUrl = document.getElementById('generatedImage').src;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-image.png'; // You can change the filename here
    link.click();
          }
