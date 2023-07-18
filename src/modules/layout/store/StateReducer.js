export default function StateReducer (state, action) {
    switch(action.type) {
        case "SHOW_MENU_ON_MOBILE_VIEW":
            return state = {
                ...state,
                toggleMenuOnMobileView: !state.toggleMenuOnMobileView,
            };
    }
}