function solution(video_len, pos, op_start, op_end, commands) {
    const v_len = to_second(video_len);
    
    pos = to_second(pos);
    const op_s = to_second(op_start);
    const op_e = to_second(op_end);
    
    for(let command of commands) {
        if(pos <= op_e && pos >= op_s) pos = op_e;
        
        if(command === 'next') {
            pos += 10;
        } else {
            pos -= 10;
        }
        
        if(pos <= op_e && pos >= op_s) pos = op_e;
        if(pos < 0) pos = 0;
        if(pos > v_len) pos = v_len;
    }

    let mm = Math.floor(pos / 60).toString().padStart(2,'0');
    let ss = (pos % 60).toString().padStart(2, '0');
    
    return `${mm}:${ss}`;
}

function to_second(t) {
    let [m, s] = t.split(":");
    return Number(m) * 60 + Number(s);
}