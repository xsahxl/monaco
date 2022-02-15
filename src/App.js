import React from "react";
import MonacoEditor from "react-monaco-editor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: '{\n  "x": 1\n}',
      code: 'edition: 1.0.0\nname: compoent-test11\naccess: test\n\nvars:\n region: cn-hangzhou\n service: # service 配置原则上不能修改， 如果有改动，请和 fengchong/xiliu 对齐下\n internetAccess: true\n tracingConfig: Disable\n logConfig:\n $active: "0"\n vpcConfig:\n $active: "0"\n nasConfig:\n $active: "0"\n\nservices:\n autoCreateNas:\n component: devsapp/fc # 组件名称\n props: # 组件的属性值\n region: ${vars.region}\n service: ${vars.service}\n function:\n environmentVariables:\n NODE_PATH: /code/node_modules:/usr/local/lib/node_modules\n handler: index.handler\n instanceConcurrency: 1\n instanceType: e1\n memorySize: 512\n runtime: nodejs12\n timeout: 60\n name: autoCreateNas\n codeUri: \'./src/main/node/autoCreateNas\'\n\n cicdAction:\n component: devsapp/fc # 组件名称\n props: # 组件的属性值\n region: ${vars.region}\n service: ${vars.service}\n function:\n environmentVariables:\n NODE_PATH: /code/node_modules:/usr/local/lib/node_modules\n handler: index.handler\n instanceConcurrency: 4\n instanceType: e1\n memorySize: 512\n runtime: nodejs12\n timeout: 60\n name: cicdAction\n codeUri: \'./src/main/node/cicdAction\'\n',
    };
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log("onChange", newValue, e);
  }
  render() {
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="yaml"
        theme="vs-dark"
        value={this.state.code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default App;
