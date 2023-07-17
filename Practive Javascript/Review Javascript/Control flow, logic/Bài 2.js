// Theo quy tắc chuyển đổi kiểu dữ liệu (type coercion) của JavaScript, 
// một chuỗi khác rỗng (non-empty string) sẽ được chuyển đổi thành true khi đánh giá trong một điều kiện.

if ("0") {
    alert( 'Hello' );
}