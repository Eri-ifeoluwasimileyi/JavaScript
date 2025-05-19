import java.util.Scanner;

import java.util.Arrays;


public class Range {
    public static void main(String[] args) {
	Scanner input = new Scanner(System.in);

	RangeArray newRange = new RangeArray();

	int [] score = new int[5];

	for (int count = 0; count < score.length; count++){

	System.out.print("Enter an integer: ");
	int numbers = input.nextInt();

	score[count] = numbers;
	
	}


	System.out.print(Arrays.toString(RangeArray.rangeOfNumber(score)));



  }
}