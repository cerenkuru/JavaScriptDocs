let value;

// arrayin sonuna başına değer ekleme

numbers = [1,2,3];

numbers.push(2000);


numbers.unshift(3000);

// sonundan değre atma

numbers.pop();

//başndan değer atma

numbers.shift();

//rastgele değer atma

numbers.splice(0,3);

// reverse

numbers.reverse();

// sıralama

numbers.sort(); //sdc ilk rakamına bakıyo

numbers.sort(function(x,y){ // küçüktn büyüğe
    return x - y;
})
numbers.sort(function(x,y){ // büyükten küçüğe
    return y - x;
})



console.log(numbers);