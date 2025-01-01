
# AI Image Generator

This project is an AI Image Generator that allows users to create images by entering prompts. The tool integrates with APIs to generate AI images based on selected models.

---

## Features
- Clean and responsive UI for generating AI images.
- Supports multiple AI models like FluxPro, SDXL, DALL-E, and FluxImage.
- Dynamically updates the API request URL based on the selected model.
- Progress bar and notification system for better user experience.
- Displays the generated image with a download option.
- Proper error handling for smooth operation.

---

## How It Works
1. User enters a prompt in the input field.
2. Selects an AI model from the dropdown menu.
3. Clicks on the "Generate" button to send a request to the API.
4. The app polls the API task URL until the image generation is complete.
5. Once done, the generated image is displayed along with a download button.

---

## API Details
This application uses the **PaxSenix AI Image Generation API** for generating images.

### API Credit
The APIs are provided by **PaxSenix**. Special thanks to **@PaxSenix** for creating robust image-generation APIs.

### Request Structure
- Endpoint:  
  ```
  https://api.paxsenix.biz.id/ai-image/{model}?text={prompt}
  ```
  Replace `{model}` with the selected model name (e.g., `fluxPro`, `sdxlImage`) and `{prompt}` with the encoded user input.

### Example Responses
1. **Initial Request:**
   ```json
   {
       "creator": "@PaxSenix",
       "ok": true,
       "message": "Here is your job id and task url!",
       "jobId": "1735725689471",
       "task_url": "https://api.paxsenix.biz.id/task/1735725689471"
   }
   ```
2. **Task URL Response:**
   ```json
   {
       "creator": "@PaxSenix",
       "ok": true,
       "status": "done",
       "url": "https://litter.catbox.moe/3wzkzv.png"
   }
   ```

### Notes:
- Ensure that the prompt text is URL-encoded (e.g., spaces become `%20`).
- The application polls the task URL every 2 seconds until the status changes to `"done"`.

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-image-generator.git
cd ai-image-generator
```

### 2. File Structure
```
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

### 3. Open in Browser
Simply open `index.html` in your browser.

---

## Usage
1. Open the application in your browser.
2. Enter a prompt in the input field.
3. Select the desired model from the dropdown menu.
4. Click on the "Generate" button.
5. Wait for the progress bar to complete and the generated image to appear.
6. Click the "Download" button to save the image locally.

---

## Technologies Used
- **HTML5**: For the structure of the application.
- **CSS3**: For styling the UI.
- **JavaScript**: For the application logic and API integration.

---

## Known Issues
1. Ensure that the API endpoint is live and accessible.
2. Large prompts may take more time to generate images.

---

## Future Enhancements
- Add more models for image generation.
- Improve error messages for better debugging.
- Implement a drag-and-drop interface for advanced users.

---

## License
This project is licensed under the MIT License.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature-name"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

---

## Created By
Nexavo  

---

## API Credit
The APIs used in this project are provided by **PaxSenix**. All rights to the API belong to **@PaxSenix**.

---

## Test Here
Host the project on any web server or use live server extensions to test the application.
https://nexavo999.github.io/Ai-Image-Generator/
```

Let me know if you’d like any further modifications!
