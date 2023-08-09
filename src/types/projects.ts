interface stack {
    name: string,
    logo: string
}

interface project { 
    logo: string,
    name: string,
    institusi: string,
    periode: string,
    stacks: stack[],
    description: string
}

export default project