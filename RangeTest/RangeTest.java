import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class RangeTest {


	@Test
	public void testTheRange() {
	
	int[] myArray = {5, 6, 10, 15, 20};

	int[] expected = {15};

	int [] returned = RangeArray.rangeOfNumber(myArray);
	
	assertArrayEquals(expected, returned);

	}	

}