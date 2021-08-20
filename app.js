//for promise understand

// let myProm = false;
// let prom = new Promise(function(resolve,reject){
// 	if(myProm){
// 		resolve('I am successfull');
// 	}else{
// 		reject('i am failed');
// 	}
// });
// console.log(prom);

// for promise understand es6

// let myProm = true;
// let prom = new Promise((resolve,reject)=>{
// 	if(myProm){
// 		resolve("I am successfull");
// 	}else{
// 		reject("I am failed");
// 	}
// });
// console.log(prom);

// promise under funtion as a perameter, use ternary operator

// function prom(condition){
// 	return new Promise((resolve,reject)=>{
// 		condition ? resolve('i am successfull') : reject('i am failed');
// 	});
// }
// console.log(prom(true));

// promise under funtion as a perameter(ES6)

// let prom = condition=>{
// 	return new Promise((resolve,reject)=>{
// 		if(condition){
// 			resolve('I a successfull');
// 		}else{
// 			reject('I am failed');
// 		}
// 	});
// }
// console.log(prom(false));

//promise details with setTimeout function, then(),catch() in build function

// let prom = (a,b)=>{
// 	return new Promise((resolve,reject)=>{
// 		console.log('Featching data, please wait...');
// 		let c = a/b;
// 		setTimeout(()=>{
// 		if(a,b){
// 			resolve(`Your answer is : ${c}`);
// 		}else{
// 			reject('Your calculation failed');
// 		}
// 		},2000);
// 	});
// }
// prom(5,0).then((result)=>{
// 	console.log(result);
// }).catch((error)=>{
// 	console.log(error);
// });


//ajax data get from jsonPlaceholder(for this we must add jquery file)

let prom = ()=>{
	return new Promise((resolve,reject)=>{
		console.log('Featching data, please wait...');
		setTimeout(()=>{
		//for fetch data 
		$.get("https://jsonplaceholder.typicode.com/posts",(data)=>{
			resolve(data);
		}).fail(()=>{
			reject('Data not fetched.')
		})
		//fail() is build in function
		},2000);
	});
}
prom().then((result)=>{
	console.log(result);
}).catch((error)=>{
	console.log(error);
});



