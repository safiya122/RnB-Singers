var photos=["https://talentrecap.com/wp-content/uploads/2020/08/Aaliyah-Barry-Hankerson-R.-Kelly-1200x675.png", "https://cdn.inquisitr.com/wp-content/uploads/2019/10/brandy.jpg", "https://images.successstory.com/img_people/profile/John-Legend_1487585034.jpg",];

console.log(photos);


photos.forEach(function(a,b){
$(".singers").append("<img src=" + photos[b] + ">");    
});


$("button").click(function() {

var input = $(".item").val();
photos.push(input);
console.log(input);
$(".item").append(input);


    $(".singers").empty();
    
    
    photos.forEach(function(a,b){
        
        $(".singers").append("<img src=" + photos[b] + ">");
    });});
