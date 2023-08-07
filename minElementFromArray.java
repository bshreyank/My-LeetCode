class minElementFromArray {
        public int FindMin(int a[]) {
                int min = a[0];
                for (int i = 0; i < a.length; i++) {

                        if (min > a[i]) {
                                min = a[i];
                                // return min;
                        }
                }
                return min;
        }


public static void main(String[] args) {
        int a[]={22,10,5,16,77,89};
        System.out.println(new minElementFromArray(). FindMin(a));
}
}