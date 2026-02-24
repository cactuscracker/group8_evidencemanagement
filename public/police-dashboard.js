// Initialize web3 and IPFS
let web3;
let contract;
let ipfs;
let userAccount;
let userData;
const contractAddress = '0x12005289121Fb0C437BF1d16D28417a4FabE8a27';
const CONTRACT_ABI = [

  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "evidenceId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "accessedBy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "EvidenceAccessed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "evidenceId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "officerName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "EvidenceAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "UserRegistered",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "evidenceIds",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "evidenceRecords",
    "outputs": [
      {
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "caseNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "crimeDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "evidenceType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "officerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "registeredUsers",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userNames",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userRoles",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      }
    ],
    "name": "registerUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_evidenceId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_caseNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_crimeDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_evidenceType",
        "type": "string"
      }
    ],
    "name": "addEvidence",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_evidenceId",
        "type": "string"
      }
    ],
    "name": "getEvidence",
    "outputs": [
      {
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "caseNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "crimeDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "evidenceType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "officerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEvidenceCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "isUserRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserRole",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "getUserName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }

  
];

// DOM Elements
const userNameEl = document.getElementById('user-name');
const userRoleEl = document.getElementById('user-role');
const logoutBtn = document.getElementById('logout-btn');
const addEvidenceNav = document.getElementById('add-evidence-nav');
const viewEvidenceNav = document.getElementById('view-evidence-nav');
const addEvidenceSection = document.getElementById('add-evidence-section');
const viewEvidenceSection = document.getElementById('view-evidence-section');
const evidenceForm = document.getElementById('evidence-form');
const uploadStatus = document.getElementById('upload-status');
const uploadProgress = document.getElementById('upload-progress');
const progressBar = uploadProgress.querySelector('.progress');
const evidenceList = document.getElementById('evidence-list');
const searchEvidence = document.getElementById('search-evidence');
const filterEvidenceType = document.getElementById('filter-evidence-type');

// ================= INIT =================
window.addEventListener('load', async () => {
    // Check login status
    checkLoginStatus();
    
    // Initialize web3 and IPFS
    await initializeWeb3();
    initializeIPFS();
    
    // Setup event listeners
    logoutBtn.addEventListener('click', logout);
    addEvidenceNav.addEventListener('click', showAddEvidenceSection);
    viewEvidenceNav.addEventListener('click', showViewEvidenceSection);
    evidenceForm.addEventListener('submit', uploadEvidence);
    searchEvidence.addEventListener('input', filterEvidence);
    filterEvidenceType.addEventListener('change', filterEvidence);

    // Event delegation for dynamically created View Details buttons
    evidenceList.addEventListener('click', function(event) {
        const btn = event.target.closest('.view-btn');
        if (!btn) return;
        const evidenceId = btn.dataset.id;
        viewEvidenceDetails(evidenceId);
    });
});

// ============ LOGIN CHECK ============
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('blockchainEvidenceUser');
    if (!loggedInUser) {
        window.location.href = 'index.html';
        return;
    }
    userData = JSON.parse(loggedInUser);
    if (userData.role !== 'Police') {
        alert('Access denied. This dashboard is for Police officers only.');
        window.location.href = 'index.html';
        return;
    }
    userNameEl.textContent = userData.name;
    userRoleEl.textContent = userData.role;
    userAccount = userData.address;
}

// ============ INIT WEB3 ============
async function initializeWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            web3 = new Web3(window.ethereum);
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAccount = accounts[0];
            
            // Initialize contract
            contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
            
            console.log("Web3 initialized successfully");
            console.log("Connected account:", userAccount);
            
            return true;
        } catch (error) {
            console.error("Error initializing Web3:", error);
            showMessage(uploadStatus, 'Failed to connect to MetaMask. Please try again.', 'error');
            return false;
        }
    } else {
        showMessage(uploadStatus, 'Please install MetaMask to use this application', 'error');
        alert('Please install MetaMask browser extension to use this application!');
        return false;
    }
}

// ============ INIT IPFS ============
function initializeIPFS() {
    try {
        // Initialize IPFS HTTP client pointing to Infura or your IPFS node
        ipfs = window.IpfsHttpClient.create({
            host: 'ipfs.infura.io',
            port: 5001,
            protocol: 'https'
        });
        console.log("IPFS initialized successfully");
        return ipfs;
    } catch (error) {
        console.error("Error initializing IPFS:", error);
        // IPFS is optional for viewing, so we don't show error to user
        return null;
    }
}

// ============ SHOW SECTIONS ============
function showAddEvidenceSection() {
    addEvidenceNav.classList.add('active');
    viewEvidenceNav.classList.remove('active');
    addEvidenceSection.classList.remove('hidden');
    viewEvidenceSection.classList.add('hidden');
}

async function showViewEvidenceSection() {
    viewEvidenceNav.classList.add('active');
    addEvidenceNav.classList.remove('active');
    viewEvidenceSection.classList.remove('hidden');
    addEvidenceSection.classList.add('hidden');
    
    // Load evidence when section is shown
    await loadEvidenceList();
}

// ============ LOGOUT ============
function logout() {
    localStorage.removeItem('blockchainEvidenceUser');
    window.location.href = 'index.html';
}

// ============ LOAD EVIDENCE ============
async function loadEvidenceList() {
    try {
        // Check if web3 and contract are initialized
        if (!web3 || !contract) {
            await initializeWeb3();
        }
        
        evidenceList.innerHTML = '<p>Loading evidence...</p>';
        
        const count = await contract.methods.getEvidenceCount().call();
        console.log("Evidence count:", count);
        
        if (count === '0' || count === 0) {
            evidenceList.innerHTML = '<p>No evidence records found.</p>';
            return;
        }
        
        evidenceList.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const evidenceId = await contract.methods.evidenceIds(i).call();
            const evidence = await contract.methods.getEvidence(evidenceId).call({ from: userAccount });
            createEvidenceCard(evidenceId, evidence);
        }
    } catch (error) {
        console.error("Error loading evidence:", error);
        evidenceList.innerHTML = '<p class="error">Error loading evidence. Please try again.</p>';
        showMessage(uploadStatus, 'Error loading evidence: ' + error.message, 'error');
    }
}

// ============ CREATE CARD ============
function createEvidenceCard(evidenceId, evidence) {
    const card = document.createElement('div');
    card.className = 'evidence-item';
    card.dataset.id = evidenceId;
    card.dataset.case = evidence.caseNumber.toLowerCase();
    card.dataset.location = evidence.location.toLowerCase();
    card.dataset.type = evidence.evidenceType;
    card.dataset.description = evidence.crimeDescription.toLowerCase();

    const date = new Date(evidence.timestamp * 1000);
    const formattedDate = date.toLocaleString();

    card.innerHTML = `
        <h3>${evidence.caseNumber}</h3>
        <div class="evidence-meta">
            <p><strong>ID:</strong> ${evidenceId}</p>
            <p><strong>Type:</strong> ${evidence.evidenceType}</p>
            <p><strong>Location:</strong> ${evidence.location}</p>
            <p><strong>Uploaded By:</strong> ${evidence.officerName}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
        </div>
        <p>${truncateText(evidence.crimeDescription, 100)}</p>
        <div class="evidence-actions">
            <button class="btn primary-btn view-btn" data-id="${evidenceId}">View Details</button>
        </div>
    `;
    evidenceList.appendChild(card);
}

// ============ VIEW EVIDENCE DETAILS ============
async function viewEvidenceDetails(evidenceId) {
    try {
        const evidence = await contract.methods.getEvidence(evidenceId).call({ from: userAccount });

        // Format timestamp
        const date = new Date(evidence.timestamp * 1000);
        const formattedDate = date.toLocaleString();

        // Create modal if it doesn't exist
        let modal = document.getElementById('evidence-modal');
        if (!modal) {
            modal = createEvidenceModal();
            document.body.appendChild(modal);
        }

        const detailsContainer = document.getElementById('evidence-details-container');
        const previewElement = document.getElementById('evidence-preview-modal');
        const downloadBtn = document.getElementById('download-btn');
        const closeBtn = modal.querySelector('.close');

        // Populate modal details
        detailsContainer.innerHTML = `
            <div class="detail-item"><span class="label">Evidence ID:</span> <span class="value">${evidenceId}</span></div>
            <div class="detail-item"><span class="label">Case Number:</span> <span class="value">${evidence.caseNumber}</span></div>
            <div class="detail-item"><span class="label">Location:</span> <span class="value">${evidence.location}</span></div>
            <div class="detail-item"><span class="label">Crime Description:</span> <span class="value">${evidence.crimeDescription}</span></div>
            <div class="detail-item"><span class="label">Evidence Type:</span> <span class="value">${evidence.evidenceType}</span></div>
            <div class="detail-item"><span class="label">Uploaded By:</span> <span class="value">${evidence.officerName}</span></div>
            <div class="detail-item"><span class="label">Timestamp:</span> <span class="value">${formattedDate}</span></div>
            <div class="detail-item"><span class="label">IPFS Hash:</span> <span class="value">${evidence.ipfsHash}</span></div>
        `;

        // Load preview
        loadEvidencePreview(evidence.ipfsHash, evidence.evidenceType, previewElement);

        // Set download button
        downloadBtn.onclick = () => downloadEvidence(evidence.ipfsHash, evidenceId);

        // Show modal
        modal.style.display = 'block';

        // Close modal handlers
        closeBtn.onclick = () => modal.style.display = 'none';
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    } catch (error) {
        console.error('Error viewing evidence details:', error);
        alert('Error loading evidence details: ' + error.message);
    }
}

// ============ CREATE MODAL ============
function createEvidenceModal() {
    const modal = document.createElement('div');
    modal.id = 'evidence-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Evidence Details</h2>
            <div id="evidence-details-container"></div>
            <div id="evidence-preview-modal" class="evidence-preview">
                <p>Loading preview...</p>
            </div>
            <div class="modal-actions">
                <button id="download-btn" class="btn success-btn">Download Evidence</button>
            </div>
        </div>
    `;
    return modal;
}

// ============ LOAD PREVIEW ============
function loadEvidencePreview(ipfsHash, evidenceType, previewElement) {
    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
    
    previewElement.innerHTML = '';
    
    if (evidenceType === 'Image') {
        previewElement.innerHTML = `<img src="${ipfsUrl}" alt="Evidence" style="max-width: 100%; height: auto;">`;
    } else if (evidenceType === 'Video') {
        previewElement.innerHTML = `<video controls style="max-width: 100%;"><source src="${ipfsUrl}">Your browser does not support video.</video>`;
    } else if (evidenceType === 'Audio') {
        previewElement.innerHTML = `<audio controls style="width: 100%;"><source src="${ipfsUrl}">Your browser does not support audio.</audio>`;
    } else if (evidenceType === 'Document') {
        previewElement.innerHTML = `<iframe src="${ipfsUrl}" style="width: 100%; height: 500px;" frameborder="0"></iframe>`;
    } else {
        previewElement.innerHTML = `<p>Preview not available for this file type.</p><p><a href="${ipfsUrl}" target="_blank">View on IPFS</a></p>`;
    }
}

// ============ DOWNLOAD EVIDENCE ============
function downloadEvidence(ipfsHash, evidenceId) {
    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
    const link = document.createElement('a');
    link.href = ipfsUrl;
    link.download = `evidence_${evidenceId}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============ UPLOAD EVIDENCE ============
async function uploadEvidence(e) {
    e.preventDefault();
    
    const evidenceId = document.getElementById('evidence-id').value.trim();
    const caseNumber = document.getElementById('case-number').value.trim();
    const location = document.getElementById('location').value.trim();
    const crimeDescription = document.getElementById('crime-description').value.trim();
    const evidenceType = document.getElementById('evidence-type').value;
    const evidenceFile = document.getElementById('evidence-file').files[0];

    if (!evidenceId || !caseNumber || !location || !crimeDescription || !evidenceType || !evidenceFile) {
        showMessage(uploadStatus, 'Please fill all fields and select a file', 'warning');
        return;
    }

    // Check file size (50MB limit)
    if (evidenceFile.size > 50 * 1024 * 1024) {
        showMessage(uploadStatus, 'File size exceeds 50MB limit', 'error');
        return;
    }

    try {
        showMessage(uploadStatus, 'Uploading file to IPFS...', 'warning');
        uploadProgress.style.display = 'block';
        progressBar.style.width = '30%';

        const formData = new FormData();
        formData.append('file', evidenceFile);

        // IMPORTANT: Replace these with your actual Pinata API keys
        const PINATA_API_KEY = 'b39638bd3495677c3d8e';
        const PINATA_SECRET_KEY = '5b9131ec21332f0094136865fbe3484deed77212f67be62bb873b8f57b212e47';

        const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
            method: 'POST',
            headers: {
                'pinata_api_key': PINATA_API_KEY,
                'pinata_secret_api_key': PINATA_SECRET_KEY
            },
            body: formData
        });

        if (!res.ok) {
            throw new Error('Failed to upload to IPFS');
        }

        const data = await res.json();
        const ipfsHash = data.IpfsHash;

        progressBar.style.width = '60%';
        showMessage(uploadStatus, 'Adding evidence to blockchain...', 'warning');

        await contract.methods.addEvidence(
            evidenceId, 
            ipfsHash, 
            caseNumber, 
            location, 
            crimeDescription, 
            evidenceType
        ).send({ from: userAccount });

        progressBar.style.width = '100%';
        showMessage(uploadStatus, 'Evidence uploaded successfully!', 'success');
        
        // Reset form
        evidenceForm.reset();
        
        // Reset progress bar after a delay
        setTimeout(() => {
            progressBar.style.width = '0';
            uploadProgress.style.display = 'none';
        }, 2000);

        // Reload evidence list if we're on that tab
        if (!viewEvidenceSection.classList.contains('hidden')) {
            await loadEvidenceList();
        }
    } catch (error) {
        console.error('Upload error:', error);
        showMessage(uploadStatus, 'Error uploading evidence: ' + error.message, 'error');
        progressBar.style.width = '0';
        uploadProgress.style.display = 'none';
    }
}

// ============ FILTER ============
function filterEvidence() {
    const term = searchEvidence.value.toLowerCase();
    const type = filterEvidenceType.value;

    evidenceList.querySelectorAll('.evidence-item').forEach(item => {
        const matchSearch = item.dataset.case.includes(term) || 
                          item.dataset.location.includes(term) || 
                          item.dataset.description.includes(term);
        const matchType = type === '' || item.dataset.type === type;
        item.style.display = (matchSearch && matchType) ? 'block' : 'none';
    });
}

// ============ HELPERS ============
function truncateText(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function showMessage(el, message, type) {
    el.textContent = message;
    el.className = 'message ' + type;
    el.style.display = 'block';
    
    if (type === 'success') {
        setTimeout(() => {
            el.textContent = '';
            el.className = 'message';
            el.style.display = 'none';
        }, 5000);
    }
}