let foodBool = true;
const elm1 = document.getElementById('hungry');
const elm2 = document.getElementById('dinner');

function findFoodBool () {

    if (foodBool) {
        elm1.style.display = "none";
        elm2.style.display = "flex";
    }
    else {
        elm1.style.display = "flex";
        elm2.style.display = "none";
    }

    return foodBool = !foodBool

}