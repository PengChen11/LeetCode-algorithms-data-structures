import java.util.Arrays;

class CodeChallenge {
    public static void main(String[] args) {
        int[] test = {2, 7, 11, 15};
        int target = 9;

        System.out.println("Output: " + Arrays.toString(findIndex(test, target)));
    }

    private static int[] findIndex(int[] testArr, int target){

        int smallTracker = 0;
        int largeTracker = testArr.length -1;

        while (smallTracker <= largeTracker) {
            if (testArr[smallTracker] + testArr[largeTracker] > target) {
                largeTracker -= 1;
            } else if (testArr[smallTracker] + testArr[largeTracker] < target) {
                smallTracker += 1;
            } else {
                return new int[]{smallTracker,largeTracker};
            }
        }
        return new int[]{-1, -1};
    }
}
