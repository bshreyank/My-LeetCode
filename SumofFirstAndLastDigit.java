import java.util.Scanner;
public class SumofFirstAndLastDigit {
        public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                System.out.println("Enter a Number: ");

                int n = sc.nextInt();
                int sum1=n%10;
                n/=10;
                int sum2=0;

                while (n>9) {
                        sum2 += n%10;
                        n /= 10;                       
                }
                sum1 = sum1+n;
                System.out.println("First and Last Digit Addition: "+sum1);
                System.out.println("Rest of the digit Addition: "+sum2);

                if(sum1==sum2){
                        System.out.println("True");
                }else{
                        System.out.println("False");
                }
        }
}
