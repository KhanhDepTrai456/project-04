import { ethers } from 'ethers';

// Định nghĩa địa chỉ RPC của mạng Ronin Saigon
const RONIN_SAIGON_RPC = 'https://saigon-testnet.roninchain.com/rpc';

// Hàm kiểm tra số dư của một địa chỉ ví
async function checkBalance(walletAddress: string) {
    try {
        // Tạo kết nối đến mạng Ronin Saigon
        const provider = new ethers.JsonRpcProvider(RONIN_SAIGON_RPC);

        // Kiểm tra tính hợp lệ của địa chỉ ví
        if (!ethers.isAddress(walletAddress)) {
            throw new Error('Địa chỉ ví không hợp lệ!');
        }

        // Lấy số dư của địa chỉ ví (kết quả là BigInt)
        const balance = await provider.getBalance(walletAddress);

        // Chuyển đổi số dư từ Wei sang RON (1 RON = 10^18 Wei)
        const balanceInRON = ethers.formatEther(balance);

        console.log('\n=== Thông tin số dư ===');
        console.log(`Địa chỉ ví: ${walletAddress}`);
        console.log(`Số dư: ${balanceInRON} RON`);

    } catch (error: any) {
        console.error('Có lỗi xảy ra:', error.message);
    }
}

// Hàm main để chạy chương trình
async function main() {
    // Lấy địa chỉ ví từ tham số dòng lệnh
    const walletAddress = process.argv[2] || '0xE854E48E25317753fAF9B39833Df3E0C9e9f25b6';
    
    console.log('Chương trình kiểm tra số dư ví trên mạng Ronin Saigon');
    console.log('Đang kết nối và kiểm tra số dư...');
    
    await checkBalance(walletAddress);
}

// Chạy chương trình
main().catch(error => {
    console.error('Lỗi chương trình:', error);
});