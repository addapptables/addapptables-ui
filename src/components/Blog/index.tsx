import * as React from 'react';
import {
    Editor, EditorState, DraftHandleValue, RichUtils,
    ContentBlock, getDefaultKeyBinding, convertToRaw,
} from 'draft-js';

const getBlockStyle = (contentBlock: ContentBlock): string => {
    const type = contentBlock.getType();

    if (type === 'header-one') {
        return 'temp-letter-red';
    }

    return 'temp-letter-green';
};

export class Blog extends React.Component<any, any> {

    private lock: boolean = false;

    constructor(props: any) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    public render() {
        return (
            <div style={{ margin: '20px' }}>
                <Editor
                    placeholder='Write your thinks...'
                    spellCheck={true}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    // blockStyleFn={getBlockStyle}
                    // customStyleMap={styleMap}
                    handleKeyCommand={this.handleKeyCommand}
                    keyBindingFn={this.mapKeyToEditorCommand}
                />
            </div>
        );
    }

    private onChange = (editorState: EditorState): void => {
        // if (this.lock) {
        //     return;
        // }

        const currentContent = editorState.getCurrentContent();

        const firstBlockKey = currentContent.getBlockMap().first().getKey();
        const currentBlockKey = editorState.getSelection().getAnchorKey();
        const isFirstBlock = (currentBlockKey === firstBlockKey);
        const currentBlockType = RichUtils.getCurrentBlockType(editorState);
        const isHeading = currentBlockType === 'header-one';

        if (isFirstBlock !== isHeading) {
            const currentState = RichUtils.toggleBlockType(editorState, 'header-one');
            this.setState({ editorState: currentState });
            return;
        }

        this.setState({ editorState });
    }

    private handleKeyCommand = (command: any): DraftHandleValue => {

        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    private mapKeyToEditorCommand = (event: any): any => {
        this.lock = false;

        if (event.keyCode === 16) {
            this.lock = true;
        }

        return getDefaultKeyBinding(event);
    }

}
