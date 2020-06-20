
public class Calculator {

    public static void main(String[] args) {

        int num1=10;
        int num2=2;

        System.out.println("Результат операции сложения числа "+num1+" с числом "+num2+ ": "+addition(num1,num2));
        System.out.println("Результат операции вычитания числа "+num1+" с числом "+num2+ ": "+subtraction(num1,num2));
        System.out.println("Результат операции умножения числа "+num1+" с числом "+num2+ ": "+multiplication(num1,num2));
        System.out.println("Результат операции деления числа "+num1+" на число "+num2+ ": "+division(num1,num2));
    }

    public static int addition (int num1,int num2){
        int result;
        result=num1+num2;

        return result;
    }

    public static int subtraction (int num1,int num2){
        int result;
        result=num1-num2;
        return result;
    }

    public static int multiplication (int num1,int num2){
        int result;
        result=num1*num2;
        return result;
    }

    public static float division (float num1,float num2){
        float result;
        result=num1/num2;
        return result;
    }
}
