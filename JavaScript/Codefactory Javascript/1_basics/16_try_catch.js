/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner() {
    try {
        console.log('Hello');

        // throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally { // try에서 에러가 나든 안나든 무조건 실행되는 영역
        console.log('---finally---');
    }
    // try에서 에러가 날 경우 : try > catch > finally
    // try에서 에러가 안 날 경우 : try > finally
}
runner();