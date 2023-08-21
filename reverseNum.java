public class reverseNum {
        public static void main(String[] args) {
                for(int num=1234;num>0;num/=10){
                        int rem = num%10;
                        System.out.println(rem);
                }
        }
}
