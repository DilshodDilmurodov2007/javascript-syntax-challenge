// [1,2,3,0,0,0], 3, [2,5,6], 3
function merge1(nums1, m, nums2, n) {
   nums1 = nums1.splice(0,m)
   nums2 = nums2.splice(0,n)
   nums1 = [...nums1, ...nums2].sort((a, b) => a - b)
   return nums1
};


console.log(merge1([1,2,3,0,0,0], 3, [2,5,6], 3));


// console.log(merge1([1,2,3,0,0,0], 3, [2,5,6], 3))


// [1,2,3,0,0,0], 3, [2,5,6], 3
function merge(nums1, m, nums2, n) {
    let counter1 = 0, counter2 = 0
    let data = []
    while(m > 0) {
        data.push(nums1[counter1])
        counter1++
        m = m - 1
    }
    while(n > 0) {
        data.push(nums2[counter2])
        counter2++
        n = n - 1
    }
    return data
}
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
