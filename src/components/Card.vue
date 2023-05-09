<template>
    <div class="card">
        <div class="img_container">
            <img src="{{ img }}" alt="">
        </div>
        <div class="content">
            <h3 class="subject">Subject</h3>
            <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, hic.</p>
            <div class="btn_containers">
                <h4 class="price">
                    $ 53
                </h4>
                <button class="btn">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'this-Card',
    props: [
        'title',
        'img',
        'price'
    ]
}
</script>

<style scoped>
.card {
    padding: 10px;
    height: 360px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #0eaa00;
    transition: .2s;
}
.card:hover {
    box-shadow: 0px 4px 16px rgba(14, 170, 0, 0.25);
    transition: .2s;
}

.img_container {
    width: 100%;
    height: 160px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: rgb(237, 255, 235);
    border: 1px solid #0eaa00;
}

.subject {
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 700;
}
.text {
    font-size: 13px;
    font-family: 'Montserrat';
    font-weight: 500;
}
.price {
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Montserrat';
}

.btn_containers {
    width: 100%;
    height: 37px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn {
    color: #fff;
    background-color: #0eaa00;
    padding: 10px 25px;
    font-size: 13px;
    font-weight: 400;
    border-radius: 6px;
    font-family: 'Montserrat';
    border: 1px solid #0eaa00;
    transition: 0.1s;
}.btn:hover {
     cursor: pointer;
    box-shadow: 0px 4px 16px rgba(14, 170, 0, 0.25);
}.btn:active {
    color: #0eaa00;
    background-color: #fff;
    transition: 0.1s;
}
</style>