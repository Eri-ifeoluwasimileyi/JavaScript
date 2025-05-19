public class RangeArray {


	public static int [] rangeOfNumber(int [] numbers) {
	

	int largest = numbers[0];
	int smallest = numbers[0];

	int range = 0;
	

	for(int counter = 1; counter < numbers.length; counter++) {

		if(largest < numbers[counter]) largest = numbers[counter];

		if(smallest > numbers[counter]) smallest = numbers[counter];

	
			range = largest - smallest;
 
	}

	
	return new int[]{range};	
 




	}

}