SPK_NAME = terminal
SPK_VERS = 3.0
SPK_REV = 4
SPK_ICON = src/$(SPK_NAME).png

DEPENDS =


UNSUPPORTED_ARCHS = $(OLD_PPC_ARCHS) $(ARMv5_ARCHS)

include ../../mk/spksrc.common.mk

MAINTAINER = iamjairo
DESCRIPTION = "JS - Terminal: Web terminal for Synology NAS, powered by ttyd."

HOMEPAGE = https://www.kernel.org/
LICENSE  = GPLv2

SPK_DEPENDS = 

DSM_UI_DIR = app
DSM_UI_CONFIG = src/app/config
DSM_APP_NAME = IamJairo.Terminal.AppInstance

WIZARDS_DIR = src/wizard

STARTABLE = yes
SERVICE_SETUP = src/service-setup.sh
SSS_SCRIPT = src/start-stop-status.sh

COPY_TARGET = nop
POST_STRIP_TARGET = terminal_strip_target


TERMINAL_ARCH =
ifeq ($(findstring $(ARCH),$(ARMv5_ARCHS) $(ARMv7L_ARCHS)),$(ARCH))
TERMINAL_ARCH = arm
endif
ifeq ($(findstring $(ARCH),$(ARMv7_ARCHS)),$(ARCH))
TERMINAL_ARCH = armhf
endif
ifeq ($(findstring $(ARCH),$(ARMv8_ARCHS)),$(ARCH))
TERMINAL_ARCH = aarch64
endif
ifeq ($(findstring $(ARCH),$(i686_ARCHS)),$(ARCH))
TERMINAL_ARCH = i686
endif
ifeq ($(findstring $(ARCH),$(x64_ARCHS)),$(ARCH))
TERMINAL_ARCH = x86_64
endif
#ifeq ($(findstring $(ARCH),$(PPC_ARCHS)),$(ARCH))
#TERMINAL_ARCH = powerpc
#endif
ifeq ($(strip $(TERMINAL_ARCH)),)
$(error Arch $(ARCH) not supported)
endif

include ../../mk/spksrc.spk.mk

.PHONY: terminal_strip_target
terminal_strip_target:
	install -m 755 -d $(STAGING_DIR)/app/
	install -m 644 src/app/config $(STAGING_DIR)/app/config
	install -m 644 src/app/helptoc.conf $(STAGING_DIR)/app/helptoc.conf
	install -m 644 src/app/terminal.js $(STAGING_DIR)/app/terminal.js

	install -m 755 -d $(STAGING_DIR)/bin/
	# curl -kL https://github.com/tsl0922/ttyd/releases/latest/download/ttyd.$(TERMINAL_ARCH) -o $(STAGING_DIR)/bin/ttyd
	curl -kL https://github.com/tsl0922/ttyd/releases/download/1.7.4/ttyd.$(TERMINAL_ARCH) -o $(STAGING_DIR)/bin/ttyd
	chmod a+x $(STAGING_DIR)/bin/ttyd
	install -m 755 -d $(STAGING_DIR)/etc/
	install -m 644 src/etc/alias.terminal.conf $(STAGING_DIR)/etc/alias.terminal.conf
	install -m 644 src/etc/terminal_tmux.conf $(STAGING_DIR)/etc/terminal_tmux.conf
	install -m 644 src/etc/terminal_ttyd.conf $(STAGING_DIR)/etc/terminal_ttyd.conf

	install -m 755 -d $(STAGING_DIR)/app/help
	install -m 755 -d $(STAGING_DIR)/app/help/enu
	install -m 644 src/app/help/enu/terminal_index.html $(STAGING_DIR)/app/help/enu/terminal_index.html
	install -m 755 -d $(STAGING_DIR)/app/texts
	install -m 755 -d $(STAGING_DIR)/app/texts/enu
	install -m 644 src/app/texts/enu/strings $(STAGING_DIR)/app/texts/enu/strings
	install -m 755 -d $(STAGING_DIR)/app/images/
	install -m 644 src/app/images/*.png $(STAGING_DIR)/app/images/