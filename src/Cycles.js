/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let res = 0;
    for (start; start <= end; start++) {
        if (start % 2 !== 0) continue;
        res += start;
    }
    return res;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let res = 0;
    while (a > 0.1) {
        a *= 0.5;
        res++;
    }
    return res;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let offset = 2;
    do {
        message =
            message.substring(0, offset) + '_' + message.substring(offset + 1);
        offset += 3;
    } while (offset < message.length);
    return message;
}
