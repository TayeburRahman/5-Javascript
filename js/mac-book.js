let count = 0;
let totalPriceAmount = 1299;
let newMemoryCost = 0;
let storage = 0;
let newDeliveryCost = 0;

let pomoCode = "stevekaku";
let promoApplied = false;

//--------Memory buttons--------------
document.getElementById('unified-8gbmemory').addEventListener('click', function(){
    //----unified 8GB Memory----------
    
    if(newMemoryCost > 0){
        totalPriceAmount = totalPriceAmount - newMemoryCost;
        newMemoryCost = 0;  
    }
    //----unified 8GB Memory price Output----------
    document.getElementById('extra-memory').innerText=newMemoryCost;
    document.getElementById('total-price').innerText = totalPriceAmount;
    document.getElementById('last-price').innerText=totalPriceAmount;

})

document.getElementById('unified-16gbmemory').addEventListener('click', function(){
    //----16GB Memory Price---
    if (newMemoryCost === 0){
        newMemoryCost = 180;
        totalPriceAmount = totalPriceAmount + newMemoryCost;
    }
    //----16GB Memory Price output---
    document.getElementById('extra-memory').innerText=newMemoryCost;
    document.getElementById('total-price').innerText = totalPriceAmount;
    document.getElementById('last-price').innerText=totalPriceAmount;

})


 //---- storege Buttons-------------
document.getElementById('storege-ssd256').addEventListener('click', function(){
    //----SSD storege price---
    if (storage > 0 ){
        totalPriceAmount = totalPriceAmount - storage;
        storage = 0;
    }
    //----SSD storege price output---
    document.getElementById('total-price').innerText = totalPriceAmount;
    document.getElementById('extra-storage').innerText = storage;
    document.getElementById('last-price').innerText=totalPriceAmount;
})

document.getElementById('storege-ssd512').addEventListener('click', function(){
    //----512GB SSD storege cost total---
    if (storage === 0){
        storage = 100;
        totalPriceAmount = totalPriceAmount + storage;
    }
    // ----512GB SSD storege cost price total (Reverse)---
    else if(storage > 100){
        totalPriceAmount = totalPriceAmount - storage;
        storage = 100;
        totalPriceAmount = totalPriceAmount + storage;
    }
    // ----512GB SSD storege total price output---
    document.getElementById('total-price').innerText  = totalPriceAmount;
    document.getElementById('extra-storage').innerText  = storage;
    document.getElementById('last-price').innerText=totalPriceAmount;

})

document.getElementById('storege-ssd1tb').addEventListener('click', function(){
    //----1Tb SSD storege cost---
    if (storage === 0){
        storage = 180;
        totalPriceAmount = totalPriceAmount + storage;
    }
    //----1Tb SSD storege cost Price(Reverse)---
    else if(storage < 180){
        totalPriceAmount = totalPriceAmount - storage;
        storage = 180;
        totalPriceAmount = totalPriceAmount + storage;
    }
    //----1Tb SSD storege Price Output---
    document.getElementById('total-price').innerText = totalPriceAmount;
    document.getElementById('extra-storage').innerText = storage;
    document.getElementById('last-price').innerText=totalPriceAmount;
})



// --------------Delivery buttons-------------
document.getElementById('freeCost-delivery').addEventListener('click', function(){
    //----Free Delivery--- 
    if(newDeliveryCost > 0){
        totalPriceAmount = totalPriceAmount - newDeliveryCost;
        newDeliveryCost = 0;  
    }
    //----Free Delivery Output--- 
    document.getElementById('delivery-Amount').innerText=newDeliveryCost;
    document.getElementById('total-price').innerText = totalPriceAmount;
    document.getElementById('last-price').innerText=totalPriceAmount;

})

document.getElementById('delivery-cost').addEventListener('click', function(){
    //----Delivery cost --- 
    if (newDeliveryCost === 0){
        newDeliveryCost = 20;
        totalPriceAmount = totalPriceAmount + newDeliveryCost;
    }
    //----Delivery cost output--- 
    document.getElementById('delivery-Amount').innerText=newDeliveryCost;
    document.getElementById('total-price').innerText = totalPriceAmount;
    document.getElementById('last-price').innerText=totalPriceAmount;

})


//-------promo code------------ 
document.getElementById('promo-btn').addEventListener('click', function(){
    const val = document.getElementById('promo-input');
    if (promoApplied){
        //------ promo code checking--- 
        if (val.value == pomoCode){
            console.log('Already applied');
            onclick.alert('Click here');
        }
        else{
            console.log('Invalid pomo code');
        }
    }

    //------Valid / Invalid promo code--- 
    else{
        // Valid promo code
        if (val.value == pomoCode){
            
            totalPriceAmount = ((totalPriceAmount / 100) * 80);
            promoApplied = true;
        }
        // Invalid promo code
        else{
            console.log('Invalid promo code');
        }
    }
        //----pomo code output (total price)--- 
        document.getElementById('last-price').innerText=totalPriceAmount;
        document.getElementById('total-price').innerText  = totalPriceAmount;
        val.value = '';


})

