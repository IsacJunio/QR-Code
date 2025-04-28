const inputValue = document.getElementById('inputValue');
const btnValue = document.getElementById('btnValue');
const imgQrCode = document.getElementById('imgQrCode');
const wrapper = document.querySelector('.wrapper');

let valueDefault;

//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerHTML = 'Carregando...';
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerHTML = 'Gerar QRCode';
    })
})

