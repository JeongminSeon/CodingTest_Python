function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    
    // id를 index 매핑
    const idx = Object.fromEntries(id_list.map((id, i) => [id, i]));
    
    // 중복 신고 제거
    const unique = Array.from(new Set(report));
    
    const reportedBy = Object.create(null);
    
    for(const line of unique) {
        const [reporter, reported] = line.split(" ");
        if(!reportedBy[reported]) reportedBy[reported] = new Set();
        reportedBy[reported].add(reporter);
    }
    
    for(const reported in reportedBy) {
        const reporters = reportedBy[reported];
        if(reporters.size >= k ) {
            for (const r of reporters) {
                answer[idx[r]] += 1;
            }
        }
    }
    
    return answer;
}