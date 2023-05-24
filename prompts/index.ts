import prompts from 'prompts'

let result = await prompts([
    {
        type: 'text',
        name: 'projectName',
        message: '工程化名字',
        initial: '默认名字',
        onState: (state,aborted) => {

        }
    }]
)
console.log(result);
