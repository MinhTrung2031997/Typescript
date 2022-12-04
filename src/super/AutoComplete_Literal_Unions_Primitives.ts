type Padding = 'small' | 'normal' | 'large' | string

function getPadding(padding: Padding) {
    if(padding === 'small') return '12px';
    if(padding === 'normal') return '18px';
    if(padding === 'large') return '24px';
    return padding
}

let padding:Padding;
padding = 'small';
padding = '0x'


const result =  getPadding(padding)

console.log(result);
