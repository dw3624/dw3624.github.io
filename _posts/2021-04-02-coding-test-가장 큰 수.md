---
title: Coding Test 가장 큰 수
tags: coding_test sort python
---

## 문제설명
 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.


## 제한사항
 - numbers의 길이는 1 이상 100,000 이하입니다.
 - numbers의 원소는 0 이상 1,000 이하입니다.
 - 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.


## 알고리즘
1. numbers의 원소를 문자열 변환
2. "각 원소를 반복해 4자리로 슬라이싱한 문자열" 기준으로 정렬
3. 문자열 합침


## Code:  
```python
def solution(numbers):
    numbers = list(map(str,numbers))
    numbers.sort(key=lambda x: (x*4)[:4], reverse=True)
    answer = str(int(''.join(numbers)))
    return answer 
```

```python
numbers = [3, 30, 34, 5, 9]
solution(numbers)
```


## 참고
### 1
```python
a = [1.2, 2.5, 3.7, 4.6]
list(map(int, a))
# [1, 2, 3, 4]
```
map : 리스트의 요소를 지정된 함수로 처리
 - list(map(함수, 리스트))
 - tuple(map(함수, 튜플))


### 2
```python
numbers.sort(key=lambda x: (x*4)[:4], reverse=True)
    # string에 곱셈을 하면 곱한 수 만큼 반복됨.
numbers
```
numbers의 원소는 0 이상 1000 이하의 정수  
  
예)  
numbers = ['3','32','35']  각 문자열을 반복시킨 후 4자리로 slice  
numbers = ['3333','3232','3535]  
result = '35332'  


### 3
```python
str(int(''.join(numbers)))
```
join : 배열을 특정 문자로 구분해 문자열로 변환  
string을 int로 변환 후 다시 string으로 변환
  
join만 사용할 경우, [0,0,0,0]이 input되면 '0000'이 return됨.  
이를 int로 변환해 '0'으로 바꾼 후, 지문에서 제시한대로 overflow 방지를 위해 str으로 변환.


