import {MemberRef} from "../../../lib/Components/Model/MemberRef";
import {minimalShapeMap, scalarTypes} from "../../../__fixtures__/index";
import {getSerializationType} from "../../../lib/Components/Model/getSerializationType";
import {StructureMember} from "@aws/service-model";

describe('MemberRef', () => {
    it('should use an inline type declaration for scalar shapes', () => {
        for (let shape of scalarTypes) {
            expect((new MemberRef({shape}, minimalShapeMap)).toString())
                .toEqual(
`{
    shape: {
        type: '${getSerializationType(shape, minimalShapeMap)}',
    },
}`
                );
        }
    });

    it('should use a reference for complex shapes', () => {
        for (let shape of ['list', 'map', 'structure']) {
            expect((new MemberRef({shape}, minimalShapeMap)).toString())
                .toEqual(
`{
    shape: ${shape},
}`
                );
        }
    });

    it('should include flattened traits in emitted object', () => {
        const member: StructureMember = {shape: 'list', flattened: true};
        expect((new MemberRef(member, minimalShapeMap)).toString())
            .toEqual(
`{
    shape: list,
    flattened: true,
}`
            );
    });

    it('should include location traits in emitted object', () => {
        const member: StructureMember = {shape: 'string', location: 'header'};
        expect((new MemberRef(member, minimalShapeMap)).toString())
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
        const member: StructureMember = {shape: 'list', locationName: 'myList'};
        expect((new MemberRef(member, minimalShapeMap)).toString())
            .toEqual(
`{
    shape: list,
    locationName: 'myList',
}`
            );
    });

    it('should include streaming traits in emitted object', () => {
        const member: StructureMember = {shape: 'blob', streaming: true};
        expect((new MemberRef(member, minimalShapeMap)).toString())
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
        const member: StructureMember = {shape: 'string', xmlAttribute: true};
        expect((new MemberRef(member, minimalShapeMap)).toString())
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
        const member: StructureMember = {shape: 'list', xmlNamespace: 'foo'};
        expect((new MemberRef(member, minimalShapeMap)).toString())
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