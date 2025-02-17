function AutoUnmute () {
    let mainSDKInstance = this;
    if (AutoUnmute.interval) {
        clearInterval(AutoUnmute.interval);
        AutoUnmute.interval = undefined;
    } else {
        AutoUnmute.interval = setInterval(function () {
            if (mainSDKInstance.hooks.state.meeting.currentUser.muted) {
                mainSDKInstance.actions.toggleMute(false);
                mainSDKInstance.actions.toggleVideo(true);
            }

            if (window.bots) {
                if (bot?.loaded) {
                    window.bots.forEach((bot) => { 
                        if (bot.hooks.state.meeting.currentUser.muted) {
                            bot.actions.toggleMute(false);
                            bot.actions.toggleVideo(true);
                        }
                    })
                }
            }

        }, window.spammerSpeed);
    }
}

export default AutoUnmute;