## 🔥 Project Origin & Authorship

FLARE-ALERT is an original AI-powered fire detection and safety system
conceptualized and developed by Aryan Gupta and Charvee Masand since 2024.

This repository represents ongoing research and engineering work.
Any derivative use must provide proper attribution to the original author.

# 🚨 **FLARE ALERT**: Fire Safety (disaster mitigation) System 🚗⚡


## Overview
FlareAlert AI is a cutting-edge disaster mitigation system designed to improve safety in industrial zones. It leverages **FlareFix**, a compact thermal IoT add-on, to upgrade existing CCTV cameras with:
- 🔥 Thermal heat detection
- 🧠 AI-based fire risk analysis
- 🚨 Smoke bomb/tampering recognition

## Features
- **🔥 Thermal Heat Detection**: Detect abnormal heat patterns before they escalate into fires.
- **🤖 AI-Powered Fire Risk Analysis**: Classify risks as normal, overheating, or fire.
- **🕵️‍♂️ Tampering Detection**: Recognize smoke bomb or camera obstruction attempts to prevent burglaries.
- **🖥️ Edge Computing with Google Coral TPU**: Real-time alerts with minimal latency, reducing dependency on cloud connectivity.
- **💰 Affordable and Scalable**: Low cost and easy deployment for India's industrial zones.

---

# CHECKOUT THE WEPAPP
https://flare-guardian-ai.lovable.app/


---

## Problem Statement
### Key Threats:
- **👩‍🔬 Human Casualties**: Overheating of machines and electrical components leading to fires.
- **💸 Asset Loss**: Destruction of expensive equipment and infrastructure due to delayed fire detection.
- **🚷 Burglaries**: Criminals using methods to obstruct CCTV cameras, bypassing traditional security.

### Why It Matters:
- India’s industrial zones are plagued by insufficient fire prevention systems.
- The need for a scalable, affordable solution to prevent fires, protect assets, and ensure safety.

## Proposed Solution: FlareAlert AI
FlareAlert AI uses **FlareFix** to enhance existing security camera systems, providing three key protections:
- **🔥 Fire Risk Detection**
- **💎 Asset Safety**
- **🛡️ Theft Prevention**

## Approach

### Technologies Used:
- **💻 Hardware**:
  - 🔥 FLIR Lepton 2.5/3.0 Thermal Sensor
  - 🤖 Google Coral TPU (Edge AI compute)
  - 🔧 Custom PCB with thermal camera mount (FlareFix)
  
- **💻 Software**:
  - 🐍 Python (AI model training with TensorFlow Lite)
  - 🖼️ OpenCV (Handling video and thermal streams)
  - ⚙️ Flask/Django (Backend alert system)
  - 📡 Firebase/MQTT (Real-time alert delivery)

### Workflow:
1. **📷 Thermal feed** captured via FlareFix.
2. **🧠 Edge inference** using Google Coral TPU for real-time classification.
3. **⚠️ Risk classification** into normal, overheating, tampering, or fire.
4. **🔔 Alert system** sends notifications to control rooms and emergency contacts.
5. **📊 Dashboard/Logs** maintained on a local server or cloud.

## Feasibility and Viability

### Feasibility:
- **🖥️ Hardware Compatibility**: FlareFix attaches to existing cameras with no need for replacements.
- **⚡ Edge Processing**: Google Coral TPU for low-latency AI processing.
- **💵 Cost**: The initial setup (~₹15k per camera) is affordable for Indian industrial sites.

### Potential Challenges:
- **⚠️ False Positives**: Due to environmental temperature changes.
- **⏳ Network Delays**: In remote industrial areas.
- **🛠️ Sensor Durability**: Harsh industrial environments may affect sensor longevity.

### Mitigation Strategies:
- **🤖 AI Model Optimization** with localized thermal datasets.
- **🌐 Edge+Cloud Hybrid Architecture**: Local processing with cloud sync for backup.
- **☔ Weatherproof Design**: Rugged, durable FlareFix casing for industrial conditions.

## Impact and Benefits

### Target Audience:
- **🏭 Factory Owners & Managers**: Reduced accidents and improved workplace safety.
- **💼 Insurance Companies**: Reduced payouts and incentivized adoption with premium discounts.
- **🌍 Local Communities**: Safer industrial zones with fewer fire-related disasters.

### Key Benefits:
- **👨‍👩‍👧‍👦 Social**: Saves lives through early detection, enhances safety culture.
- **💰 Economic**: Prevents significant asset loss, reduces insurance premiums.
- **🌱 Environmental**: Minimizes toxic emissions from fires, reduces carbon footprint.

## Prototype Demo
[🎥 Video 1](https://drive.google.com/file/d/1Mrng3Dy23Y8TrhMnt7v8IXBKK6F8FWyb/view?usp=sharing)  
[🎥 Video 2](https://drive.google.com/file/d/16da8ajDPyuIhCR0V_ExSJKYVW2l3xvH9/view?usp=sharing)

## References

- 🔥 [FLIR Lepton Thermal Sensors](https://www.flir.com/products/lepton/)
- 🤖 [Google Coral Edge TPU](https://coral.ai/products/dev-board/)
- 📉 [Industrial Fire Safety in India - Case Study](https://www.indiaspend.com/industrial-fires-are-rising-in-india/)
- 🎥 [CCTV Penetration in Indian Industrial Zones](https://www.business-standard.com/article/economy-policy/india-cctv-installation-boom-2024)
- 🧠 [AI for Real-Time Object Detection with Google Coral](https://coral.ai/docs/accelerator/detection/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Team**: Team Aurora  
**Leader**: Aryan Raj Gupta  
**Track**: AI/ML (Disaster Mitigation)  

---

## 🛠️ **Tech Stack** 🔧
- **Frontend**: 
  - ⚛️ React 
  - 🏗️ Vite
  - 🔵 TypeScript
  - 🎨 TailwindCSS
- **Backend**: Node.js (Future Integration)
- **Deployment**: Vercel (for frontend deployment)

---

## 🚀 **Getting Started** 🖥️

### 📥 **Clone the repository**:
```bash
git clone https://github.com/your-username/flare-alert.git
📂 Navigate to the project directory:
bash
Copy
cd flare-alert
📦 Install dependencies:
bash
Copy
npm install
🚦 Running the App:
🚀 Start the development server:

bash
Copy
npm run dev
🌍 Open your browser and visit http://localhost:3000 to view the app.

🗂️ Folder Structure:
plaintext
Copy
├── public/                    # Static files (including logo)
├── src/                       # Source code files
├── .gitignore                 # Git ignore file
├── README.md                  # Project overview
├── bun.lockb                  # Lock file for dependencies
├── components.json            # Project components
├── eslint.config.js           # Linter configuration
├── index.html                 # HTML entry point
├── package-lock.json          # Lock file for npm dependencies
├── package.json               # npm package configuration
├── postcss.config.js          # PostCSS config
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.app.json          # TypeScript configuration (App)
├── tsconfig.json              # Main TypeScript configuration
├── tsconfig.node.json         # Node.js TypeScript configuration
├── vite.config.ts             # Vite config for bundling
```
---

# 🤝 Contributing:
We welcome contributions to FLARE ALERT! Feel free to fork the repository, create a new branch, and submit a pull request. All contributions should follow the coding standards and best practices outlined in the project.

---

📄 License:
This project is licensed under the MIT License. See the LICENSE file for more details.

---

🙏 Acknowledgements:
NVIDIA A100 GPUs: For supporting the computational requirements of the machine learning models. 🖥️

Google Coral: For edge computing and integration with vehicle systems. 🤖

Project Inspiration: FLARE ALERT is inspired by the urgent need for sustainable fire safety in India’s growing EV infrastructure. 🌱

---

## 📄 License

This project is licensed under the **Apache2.0 License**.

---

📞 Contact:
For more information, feel free to contact the FLARE ALERT development team:

📧 Email:gupta.raj.aryan.2005@gmail.com and charvee.masand@gmail.com

🖥️ GitHub: [github.com/Aryan27-max](https://github.com/Aryan27-max) and [github.com/charveemasand108](https://github.com/charveemasand108)


