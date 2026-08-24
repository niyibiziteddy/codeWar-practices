const disemvowel = str => str.split('').map(item => 'aieuoAIEUO'.includes(item) ? '': item).join('')
​