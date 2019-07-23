let a = 2
let a_list = []
let b_list = [1,2,'hey',3] //b_list를 선언
console.log(b_list[0]) //b_list[0]을 출력
console.log(b_list[1]) //b_list[1]을 출력

b_list.push('안녕') //b_list의 끝에 '안녕' 을 출력
console.log(b_list) //b_list 전체를 출력
console.log(b_list.length) //b_list의 요소 개수를 출력

names = [{'name':'bob', 'age':20}, {'name':'Jin', 'age':21}]
new_name = {'name':'John', 'age':27}
names.push(new_name)

function f(x){
	return 3*x+2;
}

y = f(5)
console.log(y)

function give_me_alert(){
	alert('JJANG!');
}

function sum_two(num1, num2){
	return num1+num2;
}

function is_even(num){
	if (num%2 == 0){
		return true;
	}
	else {
		return false;
	}
}

let result = is_even(20);
console.log(result);

function get_levels(score){
	if (score < 50){
		return 'low';
	}
	else if (score >= 50 && score < 80){
		return 'intermediate';
	}
	else {
		return 'high';
	}
}

let result = console.log(get_levels(57));
console.log(result);

function print_all(n){
	for (let i=0; i<n; i++){
		console.log(i);
	}
}

function print_all(n){
	let result = 0
	for (let i=0; i<n; i++){
		result += i;
	}
	return result
}
console.log(print_all(54))

let names = ['Bob', 'Kay', 'Juice']
for (let j=0; j<names.length; j++){
	console.log(names(j));
}