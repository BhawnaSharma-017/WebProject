var main = document.getElementById("main");

let arr = [ "https://i.pinimg.com/474x/54/94/bd/5494bd33caf16faf6de8aad555016599.jpg",
    "https://i.pinimg.com/474x/96/5a/3e/965a3e4b2bb8cf540826439520766052.jpg",
    "https://i.pinimg.com/474x/f6/7e/61/f67e61ab43454fd66a3830ee20b76701.jpg",
    "https://i.pinimg.com/474x/af/be/23/afbe23c0c71199893ede3e2c22ff98c8.jpg",
    "https://i.pinimg.com/474x/fa/3e/df/fa3edf0fceffd53373ab45c045cce404.jpg",
    "https://i.pinimg.com/474x/61/f3/0e/61f30e599571642086a9ce1ecdad2d86.jpg",
    "https://i.pinimg.com/474x/52/03/83/5203832f703049a957cd032e584bcc2f.jpg",
    "https://i.pinimg.com/474x/d8/ff/ed/d8ffed41f8249509c7b3afd564d3686e.jpg",
    "https://i.pinimg.com/474x/5d/e9/80/5de9803bdc49a4f6c2e2b89936e94d77.jpg",
    "https://i.pinimg.com/474x/bc/6b/cb/bc6bcb9b3932fda438b46101e49d538d.jpg",
    "https://i.pinimg.com/474x/0e/3b/29/0e3b294beb09239a0625d82a2e2c0561.jpg",
    "https://i.pinimg.com/474x/93/02/cf/9302cfd2fc0d37172886cd1f2ac9da8f.jpg",
    "https://i.pinimg.com/474x/3a/cc/12/3acc12bfd9ef40ab8abaaa961480ad09.jpg",
    "https://i.pinimg.com/474x/33/f5/83/33f5832491131b7cd3e1d5a175a1b4e6.jpg",
    "https://i.pinimg.com/474x/9d/33/28/9d33288070f26522544339c03e0b8cd9.jpg"
];

let s = "";
for(let i=1;i<=60;i++){
    let r = Math.floor(Math.random() * arr.length);
    s+= `<div class="card">
            <img src =${arr[r]} alt="">
        </div>`;
}
main.innerHTML = s;

    
