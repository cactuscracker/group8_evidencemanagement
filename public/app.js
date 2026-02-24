//=============================================================================
// TRUSTCHAIN-EMS - Evidence Management System
// Smart Contract Integration
//=============================================================================

// Contract Configuration
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

//=============================================================================
// Global Variables
//=============================================================================

let web3;
let contract;
let userAccount;
let isMetaMaskConnected = false;

//=============================================================================
// DOM Elements
//=============================================================================

const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const connectMetaMaskBtn = document.getElementById('connect-metamask');
const registerConnectMetaMaskBtn = document.getElementById('register-connect-metamask');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginMessage = document.getElementById('login-message');
const registerMessage = document.getElementById('register-message');
const loginAddress = document.getElementById('login-address');
const registerAddress = document.getElementById('register-address');
const fullnameInput = document.getElementById('fullname');
const roleSelect = document.getElementById('role');

//=============================================================================
// Initialization
//=============================================================================

window.addEventListener('load', async () => {
    console.log('🚀 TrustChain-EMS Initializing...');
    
    if (typeof window.ethereum === 'undefined') {
        showMessage(loginMessage, '⚠️ MetaMask not detected. Please install MetaMask to continue.', 'error');
        showMessage(registerMessage, '⚠️ MetaMask not detected. Please install MetaMask to continue.', 'error');
        return;
    }

    try {
        // Initialize Web3
        web3 = new Web3(window.ethereum);
        console.log('✅ Web3 initialized');
        
        // Load contract
        await loadContract();
        
        // Setup event listeners
        setupEventListeners();
        
        // Check if user is already logged in
        await checkLoginStatus();
        
        console.log('✅ Application ready');
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
        showMessage(loginMessage, 'Error initializing application: ' + error.message, 'error');
    }
});

//=============================================================================
// Contract Functions
//=============================================================================

async function loadContract() {
    try {
        contract = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
        
        // Test contract connection
        const evidenceCount = await contract.methods.getEvidenceCount().call();
        console.log('✅ Contract loaded successfully');
        console.log('📊 Current evidence count:', evidenceCount);
        
        return true;
    } catch (error) {
        console.error('❌ Error loading contract:', error);
        showMessage(loginMessage, 'Failed to connect to smart contract', 'error');
        return false;
    }
}

//=============================================================================
// MetaMask Connection
//=============================================================================

async function connectMetaMask() {
    try {
        console.log('🔗 Connecting to MetaMask...');
        
        // Request account access
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        if (!accounts || accounts.length === 0) {
            throw new Error('No accounts found');
        }
        
        userAccount = accounts[0];
        isMetaMaskConnected = true;
        
        // Update UI
        loginAddress.value = userAccount;
        registerAddress.value = userAccount;
        loginBtn.disabled = false;
        registerBtn.disabled = false;
        
        // Check network
        const networkId = await web3.eth.net.getId();
        const chainId = await web3.eth.getChainId();
        
        console.log('✅ MetaMask connected');
        console.log('👤 Account:', userAccount);
        console.log('🌐 Network ID:', networkId);
        console.log('⛓️ Chain ID:', chainId);
        
        if (chainId !== 1337n && chainId !== 5777n) {
            showMessage(loginMessage, '⚠️ Warning: You may not be connected to Ganache Local network', 'warning');
            showMessage(registerMessage, '⚠️ Warning: You may not be connected to Ganache Local network', 'warning');
        } else {
            showMessage(loginMessage, '✅ MetaMask connected successfully', 'success');
            showMessage(registerMessage, '✅ MetaMask connected successfully', 'success');
        }
        
    } catch (error) {
        console.error('❌ MetaMask connection error:', error);
        
        if (error.code === 4001) {
            showMessage(loginMessage, 'Connection rejected. Please approve MetaMask connection.', 'error');
            showMessage(registerMessage, 'Connection rejected. Please approve MetaMask connection.', 'error');
        } else {
            showMessage(loginMessage, 'Error connecting to MetaMask: ' + error.message, 'error');
            showMessage(registerMessage, 'Error connecting to MetaMask: ' + error.message, 'error');
        }
    }
}

//=============================================================================
// Login Function
//=============================================================================

async function login() {
    if (!isMetaMaskConnected || !userAccount) {
        showMessage(loginMessage, 'Please connect MetaMask first', 'warning');
        return;
    }
    
    try {
        console.log('🔐 Attempting login for:', userAccount);
        showMessage(loginMessage, 'Checking registration...', 'info');
        
        // Check if user is registered
        const isRegistered = await contract.methods.registeredUsers(userAccount).call();
        
        if (!isRegistered) {
            showMessage(loginMessage, '❌ Account not registered. Please register first.', 'warning');
            console.log('❌ User not registered');
            return;
        }
        
        // Get user details
        const userName = await contract.methods.userNames(userAccount).call();
        const userRole = await contract.methods.userRoles(userAccount).call();
        
        console.log('✅ User found:');
        console.log('  Name:', userName);
        console.log('  Role:', userRole);
        
        // Save login info
        const userData = {
            address: userAccount,
            name: userName,
            role: userRole,
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('blockchainEvidenceUser', JSON.stringify(userData));
        
        showMessage(loginMessage, `✅ Welcome back, ${userName}!`, 'success');
        
        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
            redirectToDashboard(userRole);
        }, 1500);
        
    } catch (error) {
        console.error('❌ Login error:', error);
        showMessage(loginMessage, 'Error during login: ' + error.message, 'error');
    }
}

//=============================================================================
// Register Function
//=============================================================================

async function register() {
    if (!isMetaMaskConnected || !userAccount) {
        showMessage(registerMessage, 'Please connect MetaMask first', 'warning');
        return;
    }
    
    // Get form values
    const fullname = fullnameInput.value.trim();
    const role = roleSelect.value;
    
    // Validation
    if (!fullname) {
        showMessage(registerMessage, 'Please enter your full name', 'warning');
        fullnameInput.focus();
        return;
    }
    
    if (fullname.length < 3) {
        showMessage(registerMessage, 'Name must be at least 3 characters long', 'warning');
        fullnameInput.focus();
        return;
    }
    
    if (!role) {
        showMessage(registerMessage, 'Please select a role', 'warning');
        roleSelect.focus();
        return;
    }
    
    try {
        console.log('📝 Attempting registration...');
        console.log('  Name:', fullname);
        console.log('  Role:', role);
        console.log('  Account:', userAccount);
        
        // Check if already registered
        const isRegistered = await contract.methods.isUserRegistered(userAccount).call();
        
        if (isRegistered) {
            showMessage(registerMessage, '⚠️ This address is already registered', 'warning');
            console.log('⚠️ User already registered');
            return;
        }
        
        showMessage(registerMessage, '⏳ Registering... Please confirm transaction in MetaMask', 'info');
        
        // Send registration transaction
        const receipt = await contract.methods.registerUser(fullname, role).send({
            from: userAccount,
            gas: 300000
        });
        
        console.log('✅ Registration successful!');
        console.log('📄 Transaction hash:', receipt.transactionHash);
        console.log('⛽ Gas used:', receipt.gasUsed);
        
        showMessage(registerMessage, '✅ Registration successful! Redirecting...', 'success');
        
        // Save user data
        const userData = {
            address: userAccount,
            name: fullname,
            role: role,
            registrationTime: new Date().toISOString()
        };
        
        localStorage.setItem('blockchainEvidenceUser', JSON.stringify(userData));
        
        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
            redirectToDashboard(role);
        }, 1500);
        
    } catch (error) {
        console.error('❌ Registration error:', error);
        
        if (error.code === 4001) {
            showMessage(registerMessage, 'Transaction rejected by user', 'error');
        } else if (error.message.includes('gas')) {
            showMessage(registerMessage, 'Transaction failed: Insufficient gas', 'error');
        } else {
            showMessage(registerMessage, 'Registration failed: ' + error.message, 'error');
        }
    }
}

//=============================================================================
// Auto-Login Check
//=============================================================================

async function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('blockchainEvidenceUser');
    
    if (!loggedInUser) {
        console.log('ℹ️ No saved login found');
        return;
    }
    
    try {
        const userData = JSON.parse(loggedInUser);
        console.log('🔍 Checking saved login for:', userData.address);
        
        // Verify user is still registered on blockchain
        const isRegistered = await contract.methods.registeredUsers(userData.address).call();
        
        if (isRegistered) {
            console.log('✅ Auto-login successful');
            userAccount = userData.address;
            redirectToDashboard(userData.role);
        } else {
            console.log('⚠️ Saved login invalid - clearing');
            localStorage.removeItem('blockchainEvidenceUser');
        }
    } catch (error) {
        console.error('❌ Auto-login check failed:', error);
        localStorage.removeItem('blockchainEvidenceUser');
    }
}

//=============================================================================
// Dashboard Redirect
//=============================================================================

function redirectToDashboard(role) {
    console.log('🚀 Redirecting to dashboard:', role);
    
    if (role === 'Police' || role === 'police') {
        window.location.href = 'police-dashboard.html';
    } else if (role === 'Court' || role === 'court') {
        window.location.href = 'court-dashboard.html';
    } else {
        console.error('❌ Unknown role:', role);
        showMessage(loginMessage, 'Unknown user role: ' + role, 'error');
    }
}

//=============================================================================
// UI Functions
//=============================================================================

function showLoginForm() {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
}

function showRegisterForm() {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = 'message ' + type;
    element.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

//=============================================================================
// Event Listeners Setup
//=============================================================================

function setupEventListeners() {
    // Tab switching
    loginTab.addEventListener('click', showLoginForm);
    registerTab.addEventListener('click', showRegisterForm);
    
    // MetaMask connection
    connectMetaMaskBtn.addEventListener('click', connectMetaMask);
    registerConnectMetaMaskBtn.addEventListener('click', connectMetaMask);
    
    // Login and Register
    loginBtn.addEventListener('click', login);
    registerBtn.addEventListener('click', register);
    
    // Enter key support
    fullnameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') roleSelect.focus();
    });
    
    roleSelect.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') register();
    });
    
    // MetaMask account change detection
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            console.log('🔄 Account changed');
            if (accounts.length === 0) {
                console.log('🔓 MetaMask locked or disconnected');
                isMetaMaskConnected = false;
                userAccount = null;
                loginAddress.value = '';
                registerAddress.value = '';
                loginBtn.disabled = true;
                registerBtn.disabled = true;
            } else {
                userAccount = accounts[0];
                loginAddress.value = userAccount;
                registerAddress.value = userAccount;
                console.log('👤 New account:', userAccount);
            }
        });
        
        window.ethereum.on('chainChanged', () => {
            console.log('⛓️ Network changed - reloading page');
            window.location.reload();
        });
    }
    
    console.log('✅ Event listeners registered');
}

//=============================================================================
// Export for use in other files
//=============================================================================

window.BlockchainEMS = {
    getContract: () => contract,
    getWeb3: () => web3,
    getUserAccount: () => userAccount,
    isConnected: () => isMetaMaskConnected
};

console.log('📜 app.js loaded successfully');
