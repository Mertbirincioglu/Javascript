class NumberArray extends Array{
    sum = () => this.reduce((previousValue, currentValue) => (previousValue + currentValue),0);

    max = Math.max.apply(this);
    
    min = Math.min.apply(this);

    maxMinDiff = () => this.max - this.min;
}
