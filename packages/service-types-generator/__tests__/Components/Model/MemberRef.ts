import {MemberRef} from "../../../lib/Components/Model/MemberRef";
import {TreeModelMember} from "@aws/service-model";

describe('MemberRef', () => {
    it('should use an inline type declaration for blobs', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'blob',
                name: 'name',
                documentation: 'documentation',
            }
        };
        expect((new MemberRef(member)).toString()).toEqual(
`{
    shape: {
        type: 'blob',
    },
}`
            );
    });

    it('should use an inline type declaration for booleans', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'boolean',
                name: 'name',
                documentation: 'documentation',
            }
        };
        expect((new MemberRef(member)).toString()).toEqual(
`{
    shape: {
        type: 'boolean',
    },
}`
        );
    });
    it('should use an inline type declaration for numbers', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'number',
                name: 'name',
                documentation: 'documentation',
            }
        };
        expect((new MemberRef(member)).toString()).toEqual(
`{
    shape: {
        type: 'number',
    },
}`
        );
    });
    it('should use an inline type declaration for strings', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'string',
                name: 'name',
                documentation: 'documentation',
            }
        };
        expect((new MemberRef(member)).toString()).toEqual(
`{
    shape: {
        type: 'string',
    },
}`
        );
    });

    it('should use an inline type declaration for timestamps', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'timestamp',
                name: 'name',
                documentation: 'documentation',
            }
        };
        expect((new MemberRef(member)).toString()).toEqual(
`{
    shape: {
        type: 'timestamp',
    },
}`
        );
    });

    it('should use a reference for lists', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'list',
                name: 'name',
                documentation: 'documentation',
                member: {
                    shape: {
                        type: 'string',
                        name: 'string',
                        documentation: 'string',
                    }
                }
            }
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: ${member.shape.name},
}`
            );
    });

    it('should use a reference for maps', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'map',
                name: 'name',
                documentation: 'documentation',
                key: {
                    shape: {
                        type: 'string',
                        name: 'string',
                        documentation: 'string',
                    }
                },
                value: {
                    shape: {
                        type: 'string',
                        name: 'string',
                        documentation: 'string',
                    }
                },
            }
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: ${member.shape.name},
}`
            );
    });

    it('should use a reference for structures', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'structure',
                name: 'name',
                documentation: 'documentation',
                required: [],
                members: {}
            }
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: ${member.shape.name},
}`
            );
    });

    it('should include flattened traits in emitted object', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'list',
                name: 'list',
                documentation: 'documentation',
                member: {
                    shape: {
                        type: 'string',
                        name: 'string',
                        documentation: 'string',
                    }
                }
            },
            flattened: true
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: list,
    flattened: true,
}`
            );
    });

    it('should include location traits in emitted object', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'string',
                name: 'name',
                documentation: 'documentation',
            },
            location: 'header'
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: {
        type: 'string',
    },
    location: 'header',
}`
            );
    });

    it('should include locationName traits in emitted object', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'list',
                name: 'list',
                documentation: 'documentation',
                member: {
                    shape: {
                        type: 'string',
                        name: 'string',
                        documentation: 'string',
                    }
                }
            },
            locationName: 'MyList',
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: list,
    locationName: 'MyList',
}`
            );
    });

    it('should include streaming traits in emitted object', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'blob',
                name: 'name',
                documentation: 'documentation',
            },
            streaming: true,
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: {
        type: 'blob',
    },
    streaming: true,
}`
            );
    });

    it('should include xmlAttribute traits in emitted object', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'string',
                name: 'name',
                documentation: 'documentation',
            },
            xmlAttribute: true
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: {
        type: 'string',
    },
    xmlAttribute: true,
}`
            );
    });

    it('should include xmlNamespace traits in emitted object', () => {
        const member: TreeModelMember = {
            shape: {
                type: 'list',
                name: 'list',
                documentation: 'documentation',
                member: {
                    shape: {
                        type: 'string',
                        name: 'string',
                        documentation: 'string',
                    }
                }
            },
            xmlNamespace: {uri: 'foo'},
        };
        expect((new MemberRef(member)).toString())
            .toEqual(
`{
    shape: list,
    xmlNamespace: {
        uri: 'foo',
    },
}`
            );
    });
});
