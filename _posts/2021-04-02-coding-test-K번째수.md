---
title: Coding Test K번째 수
tags: coding_test sort python
---

## 문제설명
 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면,
 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 2에서 나온 배열의 3번째 숫자는 5입니다.
 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.


## 제한사항
 - array의 길이는 1 이상 100 이하입니다.
 - array의 각 원소는 1 이상 100 이하입니다.
 - commands의 길이는 1 이상 50 이하입니다.
 - commands의 각 원소는 길이가 3입니다.


## 알고리즘
1. i, j, k 원소를 assign
2. 슬라이싱 후 정렬
3. 정답 list에 값 추가


## Code:  
```python
def solution(array, commands):
    answer = []
    
    for command in commands:
        # commands에서 list를 순서대로 뽑는다
        i,j,k = command[0],command[1],command[2]   # 각각 assign
        result = array[i-1:j]   # 슬라이싱
        result.sort()   # 오름차순으로 정렬
        answer.append(result[k-1])  # 정답 리스트에 값 추가
    return answer
```

```python
array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
solution(array, commands)
```


## 참고
a[start : end : step]  
 - 각각 start, end, step 모두 양수와 음수를 가질 수 있음
 - start : 슬라이싱을 시작할 위치
 - end : 슬라이싱을 끝낼 위치, end는 포함하지 않음!!!
 - step : stride(보폭), 몇개씩 끊어서 가져올지와 방향을 결정

```python
array = [1, 5, 2, 6, 3, 7, 4]
i,j,k = 2,5,3
a=array[i:j]
b=array[i-1:j]
c=array[i-1:j-1]
print(a,b,c)
# [2, 6, 3] [5, 2, 6, 3] [5, 2, 6]
```
