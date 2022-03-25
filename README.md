# CRUD_Application_Node
In this project, we are going to create node CRUD application with express and mongodb.

#### To Run this project Clone it and install modules using
```
npm install
```

Then Create config.env file and create PORT and MONGO_URI Variable and specify Value.
That's it. You are ready to go. To execute this project just type
```
npm start
```

Enjoy...!


def Merge(array, start, mid, end):
    left = array[start:mid]
    right = array[mid:end]
    k = start
    i = 0
    j = 0
    while (start + i < mid and mid + j < end):
        if (left[i] <= right[j]):
            array[k] = left[i]
            i = i + 1
        else:
            array[k] = right[j]
            j = j + 1
        k = k + 1
    if start + i < mid:
        while k < end:
            array[k] = left[i]
            i = i + 1
            k = k + 1
    else:
        while k < end:
            array[k] = right[j]
            j = j + 1
            k = k + 1


def MergeSort(array, start, end):
    if end - start > 1:
        mid = int((start + end) / 2)
        MergeSort(array, start, mid)
        MergeSort(array, mid, end)
        Merge(array, start, mid, end)


array = list(map(int, input("Enter Elements: ").split(',')))
print("Unsorted List : ",array)
MergeSort(array, 0, len(array))
print("Sorted List : ",array)

