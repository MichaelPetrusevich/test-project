import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculate;

    @Before
    public void setUp() throws Exception {
        Calculator calculate = new Calculator();
    }

    @After
    public void tearDown() throws Exception {
        calculate = null;
    }

    @Test
    public void main() {
    }

    @Test
    public void addition() throws Exception {
        //Calculator calculate = new Calculator();
        int result = calculate.addition(-3, -5);

        assertEquals(-8, result);
    }

    @Test
    public void subtraction() throws Exception {
        //Calculator calculate = new Calculator();
        int result = calculate.subtraction(5, 9);

        assertEquals(-4, result);
    }

    @Test
    public void multiplication() throws Exception {
        //Calculator calculate = new Calculator();
        int result = calculate.multiplication(-9, 7);

        assertEquals(-63, result);
    }

    @Test
    public void division() throws Exception {
        //Calculator calculate = new Calculator();
        float result = calculate.division(3, 4);

        assertEquals(0.75, result,0);
    }
}