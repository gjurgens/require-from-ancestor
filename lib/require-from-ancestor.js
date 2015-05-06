var getAncestor = function getAncestor(_module, id) {
    if(_module) {
        var requiredModule = getAncestor(_module.parent, id);
        if(!requiredModule) {
            try {
                var dep =_module.require(id);
                return dep;
            } catch (error) {
                if(error.code === "MODULE_NOT_FOUND") {
                    return undefined;
                } else {
                    throw error;
                }
            }
        } else {
            return requiredModule;
        }
    } else {
        return undefined;
    }
};

module.exports = function(id) {
    var requiredModule = getAncestor(module, id);
    if(requiredModule) {
        return requiredModule;
    } else {
        var error = new Error("Error: Cannot find module '" + id + "' in ancestors chain.");
        error.code = "MODULE_NOT_FOUND";
        throw error;
    }

};