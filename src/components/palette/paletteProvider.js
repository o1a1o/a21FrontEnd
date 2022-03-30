import {
    assign
  } from "min-dash";
  
  export default function PaletteProvider(palette, create, elementFactory, spaceTool, lassoTool, handTool, globalConnect, translate) {
    this._palette = palette;
    this._create = create;
    this._elementFactory = elementFactory;
    this._spaceTool = spaceTool;
    this._lassoTool = lassoTool;
    this._handTool = handTool;
    this._globalConnect = globalConnect;
    this._translate = translate;
  
    palette.registerProvider(this);
  }
  PaletteProvider.$inject = ["palette", "create", "elementFactory", "spaceTool", "lassoTool", "handTool", "globalConnect", "translate"];
  
  
  PaletteProvider.prototype.getPaletteEntries = function () {
    var actions = {},
      create = this._create,
      elementFactory = this._elementFactory,
      spaceTool = this._spaceTool,
      lassoTool = this._lassoTool,
      handTool = this._handTool,
      globalConnect = this._globalConnect,
      translate = this._translate;
  
    function createAction(type, group, className, title, options) {
      function createListener(event) {
        var shape = elementFactory.createShape(assign({
          type: type
        }, options));
  
        if (options) {
          shape.businessObject.di.isExpanded = options.isExpanded;
        }
  
        create.start(event, shape);
      }
  
      var shortType = type.replace(/^bpmn:/, "");
  
      return {
        group,
        className,
        title: title || translate("Create {type}", {
          type: shortType
        }),
        action: {
          dragstart: createListener,
          click: createListener
        }
      };
    }
  
    assign(actions, {
      "hand-tool": {
        group: "tools",
        className: "bpmn-icon-hand-tool",
        title: translate("Activate the hand tool"),
        action: {
          click: function (event) {
            handTool.activateHand(event);
          }
        }
      },
      "lasso-tool": {
        group: "tools",
        className: "bpmn-icon-lasso-tool",
        title: translate("Activate the lasso tool"),
        action: {
          click: function (event) {
            lassoTool.activateSelection(event);
          }
        }
      },
      "space-tool": {
        group: "tools",
        className: "bpmn-icon-space-tool",
        title: translate("Activate the create/remove space tool"),
        action: {
          click: function (event) {
            spaceTool.activateSelection(event);
          }
        }
      },
      //连线样式
      "global-connect-tool": {
        group: "tools",
        // className: "bpmn-icon-connection-multi",
        className: "feelec feel-lianxian coldel",
        title: translate("Activate the global connect tool"),
        action: {
          click: function (event) {
            globalConnect.toggle(event);
          }
        }
      },
      "tool-separator": {
        group: "tools",
        separator: true
      },
      //开始事件 bpmn-icon-start-event-none
      "create.start-event": createAction("bpmn:StartEvent", "event", "icon-custom startNode", translate("Create StartEvent")),
     
      //用户  bpmn-icon-user-task
      "create.user-task": createAction("bpmn:UserTask", "activity", "icon-custom taskNode", translate("Create User Task")),
      // 网关 bpmn-icon-gateway-none
      "create.exclusive-gateway": createAction("bpmn:ExclusiveGateway", "gateway", "icon-custom gatewayNode", translate("Create Gateway")),
      // 结束事件 bpmn-icon-end-event-none
      "create.end-event": createAction("bpmn:EndEvent", "event", "icon-custom endNode", translate("Create EndEvent")),
    
    });
  
    return actions;
  };
  