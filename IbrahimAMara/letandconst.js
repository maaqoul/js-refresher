//exercice 1 :
for (let i=0;i<1;i++)
{
    let s=i++;
    console.log('s = ' + s);
}

console.log(s);

//log ReferenceError: s is not defined


// exercice 2

const object={
    object1:'object1',
    object2:'object2'
};

console.log('object 1 : ' + object.object1)
object.object1='object11';
console.log('object 1 : ' + object.object1)


//object 1 : object1
// object 1 : object11


