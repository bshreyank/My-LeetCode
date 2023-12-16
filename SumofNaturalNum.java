import java.util.Scanner;

class SumofNaturalNum{
        public static void main(String[] args) {
                try (Scanner sc = new Scanner(System.in)) {
                        System.out.println("Enter Number:");

                        int n = sc.nextInt();
                        int sum = 0;

                        for(int i=n; i>0;i/=10){
                                sum+=i%10;
                        }
                        System.out.println(sum);
                }
        }
}