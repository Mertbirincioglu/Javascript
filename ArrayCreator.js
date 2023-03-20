class ArrayCreator{
    static createNumberArrayStartingFromZeroToN = (n) => {
        return Array.from({length : n + 1}, (_, i) => i);
    }

    static createNumberArrayWithRange = (start, end) => {
        return Array.from({length: Math.abs(start - end) + 1}, (_, i) => start < end ? start + i : start - i)
    }

    static createNumberArrayWithRangeAndStep = (start, end, step=1) =>{
        return Array.from({length: Math.abs(start - end) / step + 1}, (_, i) => start < end ? start + i * step : start - i * step)
    }
}