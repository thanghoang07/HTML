function myFunction() {
	// Hai biến lưu min và max
	var min = null, max = null;
 
	// Biến lưu giá trị người dùng nhập vào
	var value = '';
 
	// trong khi người dùng chưa nhấn Hủy 
	// vì người dùng nhấn hủy tức là value = null,
	// thì sẽ dừng vòng lặp
	while (value != null){
    	// Lấy giá trị
    	value = prompt("Nhập số, nếu muốn dừng thì không nhập gì");
     
    	// Nếu người dùng nhấn hủy thì không thực thi những đoạn code bên trong
    	if (value != null){
        // Nếu nhập lần đầu thì gán cả hai min và max bằng value
        	if (min == null){
            	min = value;
            	max = value;
        	}else{
            	// ngược lại sẽ kiểm tra gán min và max
            	if (min > value){
                	min = value;
            	}
            	if (max < value){
               		max = value;
            	}
        	}
    	}
	}    
// In ra trình duyệt
document.getElementById("demo").innerHTML = ("Min là " + min +", Max là " + max);
// in ra console
console.log("Min là " + min +", Max là " + max)
}

