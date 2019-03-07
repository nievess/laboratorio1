import {votes} from './votes';

describe('votes',() =>{
    it('should return 0 if input is negative',()=>{
        const result= votes(-1);
        expect(result).toBe(0);
    } )
it('should increment the input if it is postive',()=>{
    const result=votes(1);
    expect(result).toBe(2);
})

})

