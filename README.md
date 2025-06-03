# Kiểm tra số dư ví trên mạng Ronin Saigon

Đây là một dự án đơn giản giúp bạn kiểm tra số dư của một địa chỉ ví trên mạng Ronin Saigon (mạng thử nghiệm). Dự án này được viết bằng TypeScript và sử dụng thư viện ethers.js để tương tác với blockchain.

## Cài đặt

1. Đầu tiên, bạn cần cài đặt [Node.js](https://nodejs.org/) (phiên bản 14 trở lên)

2. Sau khi cài đặt Node.js, mở Terminal (hoặc Command Prompt trên Windows) và chạy các lệnh sau:

```bash
# Cài đặt các thư viện cần thiết
npm install
```

## Cách sử dụng

1. Mở file `src/index.ts`

2. Tìm dòng có chứa `testAddress` và thay thế địa chỉ ví mẫu bằng địa chỉ ví bạn muốn kiểm tra:

```typescript
const testAddress = '0xE854E48E25317753fAF9B39833Df3E0C9e9f25b6'; // Thay đổi địa chỉ này
```

3. Chạy chương trình bằng lệnh:

```bash
npm start
```

## Giải thích mã nguồn

Chương trình hoạt động theo các bước sau:

1. Kết nối đến mạng Ronin Saigon thông qua địa chỉ RPC
2. Kiểm tra tính hợp lệ của địa chỉ ví
3. Lấy số dư của ví từ blockchain
4. Chuyển đổi số dư từ đơn vị Wei sang RON và hiển thị kết quả

### Các khái niệm quan trọng

- **RPC (Remote Procedure Call)**: Là cách để chương trình của chúng ta giao tiếp với blockchain
- **Wei**: Là đơn vị nhỏ nhất của RON (1 RON = 10^18 Wei)
- **Địa chỉ ví**: Là một chuỗi ký tự bắt đầu bằng "0x" và có độ dài 42 ký tự

## Lưu ý

- Đây là dự án giáo dục, chỉ sử dụng trên mạng thử nghiệm Ronin Saigon
- Không sử dụng private key hoặc thông tin nhạy cảm trong mã nguồn
- Luôn kiểm tra kỹ địa chỉ ví trước khi thực hiện giao dịch thật